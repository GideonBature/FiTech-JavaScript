// https://jsonplaceholder.typicode.com/users
let api_url = "https://jsonplaceholder.typicode.com/albums";

// fetch(api_url)
//   .then((res) => res.json() )
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

async function get_users(api_url) {
  try {
    const res = await fetch(api_url);
    console.log(res);
    if (res.status === 200) {
      console.log("Successful")
    } else {
      throw new Error("Not Successful ");
    }
    console.log(res.status);
    const data = await res.json();
    
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}

get_users(api_url);

async function create_user(api_url, user_data) {
  try {
    const res = await fetch(api_url, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data)
    });
    const msg = await res.json();
    
    if (Object.keys(msg).length === 0) {
      throw new Error("User Creation was Unsuccessful");
    }
    console.log(msg);
  } catch(error) {
    console.log(error);
  }
  
}

create_user(api_url, {
  name: "JavaScript",
  email: "javascript@fitech.com",
})

let obj = {
}

Object.keys(obj).length;

