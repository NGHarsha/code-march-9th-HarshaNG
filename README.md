# Car Catalog Application developed using React

## Used Libraries

- React
- Redux for State Management
- React Bootstrap

![Home Screen](https://user-images.githubusercontent.com/52374838/157252866-92521637-4466-4bcc-9402-4598598d38fb.png)
![Add Car Modal](https://user-images.githubusercontent.com/52374838/157253001-58bf0dcf-cd03-4d5e-b029-991a0d97e2c2.png)


## Components
### CarList Component
   - Maps through Raw data of cars and renders Car Component
### Car Component
   - Receives data as prop from CarList and renders Car as a bootstrap card
### AddCar Component
   - Bootstrap Model
   - Form for adding car to the data
### App Component
   - Contains Navbar and CarList Components as children
   - Also performs search operations and dispatches search request to redux.

