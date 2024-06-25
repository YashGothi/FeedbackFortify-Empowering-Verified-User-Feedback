import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import 'firebase/compat/auth';
import { set, ref } from "firebase/database";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
	apiKey: "AIzaSyA_V4ZWbtrGs_3TnQkWbARzrrfk01alV5o",
	authDomain: "enapp16feb24.firebaseapp.com",
	databaseURL: "https://enapp16feb24-default-rtdb.firebaseio.com",
	projectId: "enapp16feb24",
	storageBucket: "enapp16feb24.appspot.com",
	messagingSenderId: "59048148846",
	appId: "1:59048148846:web:9f93da1638ce6299bbcb7f"
  };

  
const app = firebase.initializeApp(firebaseConfig);
const db = getDatabase(app);

function EnApp()
{
	const [name, setName] = useState("");
	const [query, setQuery] = useState("");
	const [phone, setPhone] = useState("");
	const [otp, setOtp] = useState("");
	const [final, setFinal] = useState("");


	const hName = (event) => { setName(event.target.value); }
	const hQuery = (event) => { setQuery(event.target.value); }
	const hPhone = (event) => { setPhone(event.target.value); }
	const hOtp = (event) => { setOtp(event.target.value); }
	// Remove the unused 'hFinal' function
	// const hFinal = (event) => { setFinal(event.target.value); }

	const configureCaptcha = () =>{
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
	'sign-in-button', {
	'size':'invisible',
	'callback':(response) => {
	  // sendOtp();
	  console.log("Recaptcha verified")
	},
	defaultCountry: "US"
	});
	}

		const sendOtp = (event) => {
			event.preventDefault();
			configureCaptcha();
			let pn = "+1" + phone;
			let av = window.recaptchaVerifier;
			firebase.auth().signInWithPhoneNumber(pn, av)
			.then(res => {
						setFinal(res);
						console.log(res);
						console.log("OTP sent");
						alert("OTP sent");
			})
			.catch( err => console.log(err));
		}

	const submitOtp = (event) => {
		event.preventDefault();
		if (final && typeof final.confirm === 'function') {
			final.confirm(otp)
			.then(res => {
				const d = new Date().toString();
				const n = name + "-->" + d;
				const data = { name, phone, query, d }
				set(ref(db, "visitors/"+n), data)
				.then( res => {
					console.log(res);
					alert("We will call u in 2 hrs")
					window.location.reload()
			})
			.catch( err => console.log(err))
		})
		.catch(err => {
			console.log(err);
			alert("invalid OTP");
			window.location.reload()
		})
	} else {
			console.log('Confirmation result is not available or does not have a confirm method');
		}
			
	}

	return(
		<>
			<center>
			<h1> Fill the Form </h1>
			<form onSubmit={sendOtp}>
			<div id="sign-in-button"> </div>
	<input type="text" placeholder="enter name" onChange={hName}/>
			<br/><br/>
	<textarea placeholder="enter ur query" rows={3} cols={22} 
	onChange={hQuery}/>
			<br/><br/>
	<input type="number" placeholder="enter phone number" onChange={hPhone}/>
			<br/><br/>
	<input type="submit" value="Send OTP" />
			<br/><br/>
			</form>
			<form onSubmit={submitOtp}>
	<input type="number" placeholder="enter OTP" onChange={hOtp}/>
			<br/><br/>
	<input type="submit" value="Submit OTP" />
			<br/><br/>
			</form>
			</center>
		</>
	);
}

export default EnApp;
