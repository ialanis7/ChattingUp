//takes array and takes user who logged in then returning string value of recipient email we are chhatting with
const getRecipientEmail = (users, userLoggedIn) => (
    users?.filter(userToFilter => userToFilter !== userLoggedIn?.email)[0]
)

export default getRecipientEmail;