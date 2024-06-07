const handleSubmit = (event) => {
       event.preventDefault();
       
       const Name = document.querySelector('input[name=Name]').value;
       const Email = document.querySelector('input[name=Email]').value;
       const Created = document.querySelector('input[name=Created]').value;
       
         
      fetch('https://api.sheetmonkey.io/form/euJQXAD3kWcFSRDVwAbFkH', {
        
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name, Email, Created }),
      }).then((result) => window.location.href="https://caubr.gov.br/"); 

}

document.querySelector('form').addEventListener('submit', handleSubmit)