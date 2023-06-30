import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "./redux/cars/operations";
import {selectCars, selectIsLoading } from "./redux/cars/selectors";
import  CarList  from "./components/carsList";
function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const carsList = useSelector(selectCars)

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);


  return (
  <>
    <button onClick={() => console.log(carsList)}>Get Cars</button>
    <CarList/>
  </>
  )
  
}

export default App;
