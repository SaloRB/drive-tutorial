# Drive Tutorial

## TODO

- [x] Set up database and data model
- [x] Move folder open state to URL
- [x] Add auth
- [x] Add file uploading
- [x] Add analytics
- [x] Make sure sort order is consistent
- [x] Add delete
- [x] Real homepage + onboarding

## Fun follow ups

### Folder deletions

Make sure you fetch all of the folders that have it as a parent, and their children too

### Folder creations

Make a server action that tajes a name and parentId, and creates a folder with that name and parentId (don't forget to set the ownerId)

### Acess control

Check if user is owner before showing the folder page.

### Make a "file view" page

Make a page that shows a file, with a download link and a delete button

### Toasts!

Add a toast library and show toasts for success and error messages

### Gray out a row while it's being deleted

Add a "deleting" state to the row, and gray it out while it's being deleted