import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { TextField, FormControl } from '@material-ui/core';
import emailjs from 'emailjs-com';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
    modal: {
		display: 'flex',
		alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
		backgroundColor: '#3A4F64',
		border: '2px solid #000',
		borderRadius: '8px',
		boxShadow: 'none',
        color: 'white',
		padding: '10px',

	},
    topInput: {
        display: 'flex',
	},
	formDiv: {
		display: 'flex',
		flexDirection: 'column'
	},
    textField: {
        margin: '10px',
		borderRadius: '8px',
		backgroundColor: 'white',
		padding: '.5rem',
        position: 'relative',
	},
	input: {
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: '16px',
        lineHeight: '20px',
    },
    button: {
        backgroundColor: 'white',
        border: '2px white solid',
        color: 'black',
        textAlign: 'center',
        fontSize: '18px',
        borderRadius: '10px',
            '&:hover': {
                backgroundColor: '#3A4F64',
                color: 'white',
                cursor: 'pointer',
            }
    },
    sendButton: {
        display: 'flex',
        justifyContent: 'center',
    },
    sentMessage: {
        width: '462px',
        height: '234px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        height: '120px',
        width: 'auto'
    }
}));


const Fade = React.forwardRef(function Fade(props, ref) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

Fade.propTypes = {
	children: PropTypes.element,
	in: PropTypes.bool.isRequired,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
};

function Contact() {
    const classes = useStyles();
    const [sent, setSent] = useState(false);
	const [open, setOpen] = useState(false);
	const [mail, setMail] = useState({
		sender: '',
		subject: '',
        date: 'Sent on' + new Date(Date.now()).toLocaleString(),
		message: '',
	});

	const handleChange = e => {
		setMail({ ...mail, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
        if(mail.sender.length === 0) {
            return alert('Please fill in Sender information')
        } else if (mail.subject.length === 0) {
            return alert('Please fill in Subject information')
        } else if (mail.message.length === 0) {
            return alert('Please fill in message information')
        } else {
            mailSend();
		    setSent(true);
        }
    };

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setMail({
            sender: '',
            subject: '',
            date: 'Sent: ' + new Date(Date.now()).toLocaleString(),
            message: '',
        })
        setSent(false)
	};

    const mailSend = () => {
        emailjs.send('gmail','template_Fo7Eh5gy', mail, 'user_uNOgPjlc87zpzQsLUjqbN')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

	return (
		<div>
			<button
				onClick={handleOpen}
				className='button'>
				Contact
			</button>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<button
							onClick={handleClose}
                            className={classes.button}>
                                X
                        </button>
                        {!sent &&
                        <>
						<div className={classes.formDiv}>
							<MailOutlineIcon className={classes.icon} />
                            <FormControl>
                            <div className={classes.topInput}>
							<TextField
								className={classes.textField}
								name="sender"
								onChange={handleChange}
								placeholder="Sender"
								value={mail.sender}
								InputProps={{
									disableUnderline: true,
									className: classes.input,
								}}
								InputLabelProps={{
									className: classes.label,
								}}
							/>
                            <TextField
								className={classes.textField}
								name="subject"
								onChange={handleChange}
								placeholder="Subject"
								value={mail.subject}
								InputProps={{
									disableUnderline: true,
									className: classes.input,
								}}
								InputLabelProps={{
									className: classes.label,
								}}
							/>
                            </div>
                            <TextField
								className={classes.textField}
								name="message"
								onChange={handleChange}
								id="standard-multiline-static"
								multiline
								rows="5"
								placeholder="Message"
								value={mail.message}
								InputProps={{
									disableUnderline: true,
									className: classes.input,
								}}
								InputLabelProps={{
									className: classes.label,
								}}
							/>
							</FormControl>
							</div>
                        <div className={classes.sendButton}>
						<button
							className={classes.button}
							onClick={handleSubmit}>
							Send
						</button>
                        </div>
                        </>
                        }
                        {sent &&
                        <div className={classes.sentMessage}>
                            <h1>Message Sent</h1>
                            <MailOutlineIcon className={classes.icon} />
                        </div>
                        }
					</div>
				</Fade>
			</Modal>
		</div>
    )
}


export default Contact;