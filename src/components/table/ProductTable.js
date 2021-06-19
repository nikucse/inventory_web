import React from "react";

const ProductTable = () => {
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Emp Name</th>
            <th scope='col'>Size</th>
            <th scope='col'>Photo</th>
            <th scope='col'>Destination</th>
            <th scope='col'>Date</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Rajesh Sharma</th>
            <td>
              <image>25”,78”,39”,15.5”.</image>
            </td>
            <td>
              <td>
                <img
                  src='https://www.pngfind.com/pngs/m/8-82179_sofa-png-download-image-sofa-png-transparent-png.png'
                  height={100}
                  width={100}></img>
              </td>
            </td>
            <td>P.M House</td>
            <td>15-07-2021</td>
            <td>Polish</td>
          </tr>
          <tr>
            <th scope='row'>Madan Sharma</th>
            <td>
              <image>25”,78”,39”,15.5”.</image>
            </td>
            <td>
              <td>
                <img
                  src='https://www.pngfind.com/pngs/m/8-82179_sofa-png-download-image-sofa-png-transparent-png.png'
                  height={100}
                  width={100}></img>
              </td>
            </td>
            <td>P.M House</td>
            <td>15-07-2021</td>
            <td>Carpanter</td>
          </tr>
          <tr>
            <th scope='row'>Krishna Sharma</th>
            <td>
              <image>25”,78”,39”,15.5”.</image>
            </td>
            <td>
              <td>
                <img
                  src='https://www.pngfind.com/pngs/m/8-82179_sofa-png-download-image-sofa-png-transparent-png.png'
                  height={100}
                  width={100}></img>
              </td>
            </td>
            <td>P.M House</td>
            <td>15-07-2021</td>
            <td>Carbin</td>
          </tr>
          <tr>
            <th scope='row'>Baban Sharma</th>
            <td>
              <image>25”,78”,39”,15.5”.</image>
            </td>
            <td>
              <td>
                <img
                  src='https://www.pngfind.com/pngs/m/8-82179_sofa-png-download-image-sofa-png-transparent-png.png'
                  height={100}
                  width={100}></img>
              </td>
            </td>
            <td>P.M House</td>
            <td>15-07-2021</td>
            <td>Polish</td>
          </tr>
          <tr>
            <th scope='row'>Manoj Sharma</th>
            <td>
              <image>25”,78”,39”,15.5”.</image>
            </td>
            <td>
              <td>
                <img
                  src='https://www.pngfind.com/pngs/m/8-82179_sofa-png-download-image-sofa-png-transparent-png.png'
                  height={100}
                  width={100}></img>
              </td>
            </td>
            <td>P.M House</td>
            <td>15-07-2021</td>
            <td>Kushan</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
