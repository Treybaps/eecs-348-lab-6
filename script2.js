function verifyPassword() { 
    const pw1 = document.getElementById('password1').value; 
    const pw2 = document.getElementById('password2').value; 

    if (pw1.length < 8) { 
        alert("Password must be at least 8 characters long."); 
    } else if (pw1 !== pw2) { 
        alert("Passwords do not match."); 
    } else { 
        alert("Passwords match!"); 
    } 

} 