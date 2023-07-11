import React, { Component } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {navigate} from 'react-router-dom';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            gender: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            termsAccepted: false,
            errors: {}
        };
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        this.setState({
            [name]: fieldValue
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, gender, phoneNumber, password, confirmPassword, termsAccepted } = this.state;
        const errors = {};

        if (name.trim() === '') {
            toast.error('Name is required', { position: toast.POSITION.TOP_RIGHT });
            return;
        }
        if (email.trim() === '') {
            toast.error('Email is required', { position: toast.POSITION.TOP_RIGHT });
            return;
        }
        if (gender === '') {
            toast.error('Please select a gender', { position: toast.POSITION.TOP_RIGHT });
            return;
        }
        if (phoneNumber.trim() === '') {
            toast.error('Phone number is required', { position: toast.POSITION.TOP_RIGHT });
            return;
        }
        if (password.trim() === '') {
            toast.error('Password is required', { position: toast.POSITION.TOP_RIGHT });
            return;
        }
        if (confirmPassword.trim() === '') {
            toast.error('Confirm password is required', { position: toast.POSITION.TOP_RIGHT });
            return;
        }
        if (password !== confirmPassword) {
            toast.error('Passwords do not match', { position: toast.POSITION.TOP_RIGHT });
            return;
        }
        if (!termsAccepted) {
            toast.error('Please accept the terms and conditions', { position: toast.POSITION.TOP_RIGHT });
            return;
        }

        // Reset the form
        this.setState({
            name: '',
            email: '',
            gender: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            termsAccepted: false,
            errors: {}
        });
        event.target.reset();
        toast.success("Signup successful!", {
            
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // Toast will stay for 3 seconds
            onClose: () => {
                // Redirect to another page
                window.location.href = '/Login'
            }
        })
    };


    render() {
        const { name, email, gender, phoneNumber, password, confirmPassword, termsAccepted, errors } = this.state;
        const paperStyle = { padding: '30px 20px', width: 300, margin: 'auto', opacity: 0.8 };
        const headerStyle = { margin: 0 };
        const marginTop = { marginTop: 4 };
        const image = {
            backgroundImage: `url('/images/Signup.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex'
        };

        return (
            <Grid style={image}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography variant='caption' gutterBottom>
                            Please fill this form to create an account!
                        </Typography>
                    </Grid>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            fullWidth
                            label='Name'
                            placeholder='Enter your name'
                            name='name'
                            value={name}
                            onChange={this.handleChange}
                            error={!!errors.name} // Convert error object to boolean
                            helperText={errors.name}

                        />
                        <TextField
                            fullWidth
                            label='Email'
                            placeholder='Enter your email'
                            name='email'
                            value={email}
                            onChange={this.handleChange}
                            error={!!errors.email}
                            helperText={errors.email}

                        />
                        <FormControl component='fieldset' style={marginTop}>
                            <FormLabel component='legend'>Gender</FormLabel>
                            <RadioGroup
                                aria-label='gender'
                                name='gender'
                                value={gender}
                                onChange={this.handleChange}
                                style={{ display: 'initial' }}

                            >
                                <FormControlLabel value='female' control={<Radio />} label='Female' />
                                <FormControlLabel value='male' control={<Radio />} label='Male' />
                            </RadioGroup>
                            {errors.gender && (
                                <Typography variant='caption' color='error' style={{ marginTop: '5px' }}>
                                    {errors.gender}
                                </Typography>
                            )}
                        </FormControl>
                        <TextField
                            fullWidth
                            label='Phone Number'
                            placeholder='Enter your phone number'
                            name='phoneNumber'
                            value={phoneNumber}
                            onChange={this.handleChange}

                        />
                        <TextField
                            fullWidth
                            label='Password'
                            placeholder='Enter your password'
                            name='password'
                            type='password'
                            value={password}
                            onChange={this.handleChange}

                        />
                        <TextField
                            fullWidth
                            label='Confirm Password'
                            placeholder='Confirm your password'
                            name='confirmPassword'
                            type='password'
                            value={confirmPassword}
                            onChange={this.handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}

                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name='termsAccepted'
                                    checked={termsAccepted}
                                    onChange={this.handleChange}

                                />
                            }
                            label='I accept the terms and conditions.'
                        />
                        <Button type='submit' variant='contained' color='primary'>
                            Sign up
                        </Button>
                    </form>
                </Paper>
                <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            </Grid>
        );
    }
}

export default Signup;
