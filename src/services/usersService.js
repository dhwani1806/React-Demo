import axios from "axios";

export const handleDelete = (users, userId) => {
  // Replace with your delete API call
  axios
    .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(() => users.filter((user) => user.id !== userId))
    .catch((error) => console.error("Error deleting user:", error));
};

export const handleSave = (users, editingUser, newName, newEmail) => {
  // Replace with your update API call
  axios
    .put(`https://jsonplaceholder.typicode.com/users/${editingUser.id}`, {
      name: newName,
      email: newEmail,
    })
    .then((response) => {
      return users.map((user) =>
        user.id === editingUser.id ? response.data : user
      );
    })
    .catch((error) => console.error("Error updating user:", error));
};
