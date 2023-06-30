import { useState} from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { selectCars } from '../redux/cars/selectors';

function CarList() {
 const cars = useSelector(selectCars)
  const [currentPage, setCurrentPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredCars, setFilteredCars] = useState([]);

  const carsPerPage = 10;

//   const totalPages = Math.ceil(filteredCars.length / carsPerPage);
// const totalPages = Math.ceil(cars.length / carsPerPage);


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  // ... Rest of the code ...

  const renderTableRows = () => {
    console.log(cars);
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const currentCars = cars.slice(startIndex, endIndex);

    return currentCars.map((car, index) => (
      <tr key={index}>
        <td>{car.company}</td>
        <td>{car.model}</td>
        <td>{car.vin}</td>
        <td>{car.color}</td>
        <td>{car.year}</td>
        <td>{car.price}</td>
        <td>{car.availability}</td>
        <td>
          {/* Actions column */}
          {/* Add your desired actions/buttons here */}
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Model</th>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Price</th>
            <th>Availability</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>

      <div>
        <ReactPaginate
          pageCount={Math.ceil(cars.length / carsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          forcePage={currentPage - 1}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default CarList