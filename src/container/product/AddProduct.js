import React, { useState, useEffect } from "react";
import { addProduct } from "../../service/ProductService";
import "./AddProduct.css";
import { useHistory } from "react-router-dom";
const AddProduct = () => {
  let history = useHistory();
  const [values, setValues] = useState({
    productName: "",
    category: "sofa",
    productImage,
    dimension: "",
    color: "",
    price: "",
    actualPrice: "",
    buildBy: "Rajesh Shrama",
    location: "",
    status: "Initiated",
    message: "",
    error,
    loading,
    didRedirect,
    isEdit : false

  });

  const {
    productName,
    category,
    productImage,
    dimension,
    color,
    price,
    actualPrice,
    buildBy,
    location,
    status,
    message,
    error,
    loading,
    didRedirect,
    isEdit
  } = values;
  const categoryOptionData = [
    {
    "value": "sofa",
    "lable": "SOFA",
    "selected": "true"
  },
  {
    "value": "table",
    "lable": "TABLE",
    "selected": "false"
  },
  {
    "value": "chair",
    "lable": "CHAIR",
    "selected": "true"
  },
  {
    "value": "bed",
    "lable": "BED",
    "selected": "false"
  },
  {
    "value": "cupboard",
    "lable": "CUPBOARD",
    "selected": "false"
  }
  ]
  const buildByOptionData = [{
    "value": "Rajesh Shrama",
    "lable": "Rajesh Shrama",
    "selected": "true"
  }, {
    "value": "Monoj Shrama",
    "lable": "Manoj Shrama",
    "selected": "false"
  },
  {
    "value": "Rahool Patil",
    "lable": "Rahool Patil",
    "selected": "false"
  }]

  const statusOptionData = [{
    "value": "Initiated",
    "lable": "Initiated",
    "selected": "true"
  }, {
    "value": "InProgress",
    "lable": "InProgress",
    "selected": "false"
  },
  {
    "value": "Polish",
    "lable": "Polish",
    "selected": "false"
  },
  {
    "value": "Kushan",
    "lable": "Kushan",
    "selected": "false"
  },
  {
    "value": "Dispatched",
    "lable": "Dispatched",
    "selected": "false"
  },
  {
    "value": "Dilevered",
    "lable": "Dilevered",
    "selected": "false"
  },



  ]
  useEffect(()=>{
    console.log("history = = ", history.location.state);
    if(history.location.state && history.location.state.productName)
    setValues({...values, ...history.location.state, isEdit: true})
    history.push({
      state: {}
    })
  }, [])
  const onSubmit = (event) => {
    event.preventDefault();
    // alert(321)
    setValues({ ...values, error: false, loading: true });

    addProduct({
      productName,
      category,
      productImage,
      dimension,
      color,
      price,
      actualPrice,
      buildBy,
      location,
      status,
      message,
    })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          setValues({
            ...values,
            didRedirect: true,
          });
          console.log("Add Product Detail =====> ", data);
        }
      })
      .catch(console.log("Login request failed"));
  };

  const handleChange = (name) => (event) => {
    console.log("=====>   ", name + "    =======>   ", event.target.value);
    console.log("values = ", values)
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const fileToBase64Convertor = (file, callback) => {
    if (file && file.length > 0) {
      let reader = new FileReader();
      reader.readAsDataURL(file[0]);
      reader.onload = function () {
        console.log("Base 64 ===>  ", reader.result);
        callback(null, reader.result);
      }
      reader.onerror = function (error) {
        console.log("Error ", error);
        callback(error);
      }
    }
  }
  return (
    <div className='container mt-3'>
      {
        isEdit ?  <h2 className=''>Edit Product</h2> :  <h2 className=''>Add Product</h2>
      }
      <form className='g-3'>
        <div className='row'>
          <div className='col-md-6 pl-0'>
            <div className='col-md-12 mb-3'>
              <label htmlFor='name' className='form-label'>
                Product Name
              </label>
              <input
                type='text'
                className='form-control'
                id='name'
                placeholder='Product Name'
                onChange={handleChange("name")}
                value={productName}
              />
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='category' className='form-label'>
                Category
              </label>
              <select className='form-control'
                id='category'
                className='form-control form-control'
                onChange={handleChange("category")}
                value={category}>
                {
                  categoryOptionData.map(option => <option key={option.value} value={option.value}>{option.lable}</option>
                  )
                }
              </select>
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='dimension' className='form-label'>
                Dimension
              </label>
              <input
                type='text'
                className='form-control'
                id='dimension'
                placeholder='6X6*4'
                onChange={handleChange("dimension")}
                value={dimension}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <label htmlFor='productImage' className='form-label'>
              Product Image test
            </label>
            <input
              className='form-control productImage'
              type='file'
              id='productImage'
              multiple
              onChange={handleChange("productImage")}
              value={productImage}
              accept=".pdf, .jpeg, .png, .jpg"
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 pl-0'>
            <div className='col-md-12 mb-3'>
              <label htmlFor='color' className='form-label'>
                Color
              </label>
              <input
                type='text'
                className='form-control'
                id='color'
                placeholder='water color, rust'
                onChange={handleChange("color")}
                value={color}
              />
            </div>
            <div className='col-md-12 mb-3'>
              <label htmlFor='price' className='form-label'>
                Price
              </label>
              <input
                type='Number'
                className='form-control'
                id='price'
                placeholder='27800'
                onChange={handleChange("price")}
                value={price}
              />
            </div>
            <div className='col-md-12 mb-3'>
              <label htmlFor='actualPrice' className='form-label'>
                Actual Price
              </label>
              <input
                type='Number'
                className='form-control'
                id='actualPrice'
                placeholder='24800'
                onChange={handleChange("actualPrice")}
                value={actualPrice}
              />
            </div>
          </div>
          <div className='col-md-6 pl-0'>
            <div className='col-md-12 mb-3'>
              <label htmlFor='buildBy' className='form-label'>
                Build By
              </label>
              <select
                id='buildBy'
                className='form-control form-control'
                onChange={handleChange("buildBy")}
                value={buildBy}>
                {
                  buildByOptionData.map(option => <option key={option.value} value={option.value}>{option.lable}</option>
                  )
                }
              </select>
            </div>

            <div className='col-md-12 mb-3'>
              <label htmlFor='status' className='form-label'>
                Status
              </label>
              <select
                id='status'
                className='form-control form-control'
                onChange={handleChange("status")}
                value={status}>
                {
                  statusOptionData.map(option => <option key={option.value} value={option.value}>{option.lable}</option>
                  )
                }

              </select>
            </div>
            <div className='col-md-12 mb-3'>
              <label htmlFor='message' className='form-label'>
                Message
              </label>
              <input
                type='text'
                className='form-control'
                id='message'
                placeholder='Enter Some Extra Info'
                onChange={handleChange("message")}
                value={message}
              />
            </div>
          </div>
        </div>

        <div className='center mb-3 mx-auto'>
          <button type='submit' className='btn btn-primary' onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
