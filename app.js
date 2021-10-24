// variable -> let or const

// object

const social_media_links = {
  github: 'davibc',
  youtube: 'davibc',
  facebook: 'costadavib',
  instagram: 'costadavib',
  twitter: 'costabdavi'
}

// DOM -> Document Object Model
// We use the DOM for access all the html content inside of JavaScript

function change_social_media_links() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${social_media_links[social]}`

    // alert(li.children[0].href)
  }
}

change_social_media_links()

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${social_media_links.github}`

  fetch(url)
    .then(response => response.json()) // -> arrow function receive a response and make her a json file. Btw, we don't use curly brackets in this case 'cause just one action will be realized, if was more than one, it's needed to use curly brackets.
    .then(data => {
      userName.textContent = data.name // innerHTML -> yes, works. You can type 'textContent = "xyz"', too. ;)
      userBio.textContent = data.bio
      userGithubLink.href = data.html_url
      userAvatar.src = data.avatar_url
      githubLogin.textContent = data.login
    })
}

get_github_profile_infos()

/** Good practices in JS
 * camelCase
 * PascalCase
 * snake_case
 */

/** Simple commands
 * id.textContent = "x" -> change the content of the object called by the id. Btw, its the same witch do -> "const variable = (document.getElementById('idOfTheElement').textContent = 'new text')"
 * id.children -> select the "children's" inside of the "parent"
 * object.getAttribute('class') -> can show every attribute available inside "x" element.
 */

/** Repeat loops
 * for (let i = 0; i <= 5; i++)
 */

// Concepts
/** Scope variable
 * This one only exist insert a context, while him exist.
 */
/** Global variable
 * Exist over all the code, in every context.
 */

/** API
 * We use the API to connect us with a system and send all the needed data. The API takes this data to him origin site and returns only what we need.
 */

/** fetch()
 * This function will pick in the API only what we need.
 * By the way, him doesn't know that the API is a JSON file. Just get the data.
 */
/** then() -> same that "promise"
 * "then()" command it's a promise of do something. Btw, then means do, too. lol
 */

/** Arrow functions
 * function name_of_the_function(argument) {
 *  // code
 * }
 * On the top, we can see a normal function structure.
 *
 * Bellow, we can see a arrow function. It's like a normal function, but, without name and without declaration. It's anonymous. So, to call them it's necessary learn about other advanced commands.
 *
 * argument => { -> arrow function using only the argument, without the parentheses.
 *  // code
 * }
 *
 * (argument1, argument2) => { -> arrow function with more than 1 argument. It's needed use parentheses.
 *  // code
 * }
 *
 * () => { -> arrow function without arguments. So, we need to use a parentheses, but, with nothing inside him.
 * }
 */
