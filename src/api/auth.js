const cohort = "2211-FTB-ET-WEB-FT"

export const registerUser = async (username, password) => {
    try {
        const response = await
            fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    user: {
                        username,
                        password,
                    },
                }),
            }
            );
            const {data: {token},} = await response.json();
            return token;
    } catch (error) {
        console.error(error);
    }
};


// this gets info for the currentUser such as messages and authorization

export const fetchMe = async (token) => {
    try { 
        const response = await
        fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }); 
      const { data }= await response.json();
      return data;
    } catch (error) {
        console.error(error);
    }
};

export const LogInUser = async (username, password)=> {
    try {
        const response = await
        fetch(`https://strangers-things.herokuapp.com/api/${cohort}/users/login`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username,
      password,
    }
  })
})
const {data: {token},} = await response.json();
            return token;
    } catch (error) {
        console.error(error);
    }
};

export const PostFormInfo = async (title, description, price, location, token) => {
    try {
      const response = await 
        fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            location
          }
        })
      })
      const { data }= await response.json();
      return data;
    } catch (error) {
      console.error(error)
    }
  };
  
  // willDeliver, dont forget to pass this 