import React from 'react'
import { useState } from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GetallCards from '../state/Actions/GetallCards';
export default function Navbar(props) {
  const navbar_header = {
    height: '80px',
    background: '#0B223F'
  }
  const navbar_rightarea = {
    display: 'flex',
    minWidth: '25vw',
    justifyContent: 'space-around',

    alignItems: 'center',

  }
  const right_button = {
    display: 'flex',
    gap: '12px'
  }
  const right_icons = {
    display: 'flex',
    gap: '30.2px'
  }

  const [cards, setcards] = useState([])

  const baseTextColor = {
    color: 'white',
  }

  const searchTextContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'Center',
    height: '100%',

  }


  const searchInput = {
    width: '90%',
    boxShadow: '0 !important',
    outline: "none"
  }

  const dropdownStyle = {
    zIndex: 2,
    transition: 'all 0.5s ease-in-out',
    marginLeft: '1.5rem',
    borderRadius: '0.8rem',
    backgroundColor: '#E2E8F0',
    width: '250px'
  }

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setcards([]);
    setIsHover(false);


  };




  const dropdownHeading = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'black',
    marginLeft: '10px'

  }

  function Loginbutton() {
    return (
      <>
        <button type="button" className="btn btn-primary">Success</button>
        <Link to={'/signup'}><button type="button" className="btn btn-outline-primary"><span className='text-white'>Signup</span></button></Link>
      </>
    )
  }

  function Accounts({ name }) {
    return (
      <>
        <span><a><img src='user-circle.png'></img><p className='px-1 d-inline text-light py-3'>{name}</p></a></span>
      </>
    )
  }


  const [SearchContainer, SetSearchContainer] = useState({
    width: '100%',
    zIndex: 1,
    position: 'absolute',
    transition: 'all 0.5s ease-in-out',
    marginTop: '-200px',
  })

  const [toggleSearch, setToggle] = useState(true)

  const toggleSearchHandler = () => {
    toggleSearch === false ? setToggle(true) : setToggle(false)
    if (toggleSearch === true) {
      SetSearchContainer(
        {
          width: '100%',
          zIndex: 1,
          position: 'absolute',
          transition: 'all 0.5s ease-in-out',
          marginTop: '0px',
        }
      )

    } else {
      SetSearchContainer(
        {
          width: '100%',
          zIndex: 1,
          position: 'absolute',
          transition: 'all 0.5s ease-in-out',
          marginTop: '-200px',
        }
      )

    }

  }

  const submenu = {
    position: 'absolute',
    top: '80px',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isHover ? 'flex' : 'none',
    zIndex: 2
  }



  /////////////// data ////////////

  const categories = props.data
  const productcount = useSelector(state => state.productIncrementReducer.prodcount)
  console.log("this is productcount", productcount)
  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  const result = groupBy(categories, 'parentId');
  const [currentparent, setCurrentParent] = useState(null)

  const persistedState = localStorage.getItem('parseData');
  console.log(JSON.stringify(persistedState));

  // hovering data

  const fetchid = (event) => {
    let child = event.target.getAttribute('childId')
    let parent = event.target.getAttribute('parentId')

    currentparent === parent ? setcards(cards.pop()) : setCurrentParent(parent)


    const found = cards.some(e => e.parent === parent)
    if (!found) {
      setcards(cards.concat({ parent, child }))
    } else {
      console.log('yes there was duplicate')
      setcards(cards.pop())
      setcards(cards.concat({ parent, child }))

    }






  }




  const card = (key) => {
    return (



      result[key]?.map((element) => {
        return (
          <Link className="nav-link" onClick={() => dispatch(GetallCards(element.childId))} onMouseEnter={fetchid} to={'/allCards'} id='dropdown_item' parentId={element.parentId} childId={element.childId} key={element.childId} > {element.name}<span style={{ float: 'right', listStyle: 'none' }}><i></i></span></Link>
        )

      }))
  }





  function Card(props) {
    if (result[props.card]) {
      return (
        <div style={{ paddingLeft: '1%' }}>
          <div class="card">
            {card(props.card)}
          </div>
        </div>


      )

    }

  }




  const dispatch = useDispatch()





  const [serchvalue, setSearchValue] = useState('')
  const nevigate = useNavigate()
  const serachHandler = (e) => {

    setSearchValue(e.target.value)


  }

  const enter = (e) => {

    if (e.key == "Enter") {
      dispatch(GetallCards(1, serchvalue))
      setTimeout(() => {
        nevigate("/allcards")
      }, 1000)



    }

  }





  return (
    <>
      {/*container when close*/}
      <div className='container-fluid d-flex justify-content-center' id="SearchContainer" style={{ ...navbar_header, ...SearchContainer }}>
        <div className='Container d-flex justify-content-center w-50 ' style={{ ...searchTextContainer }}>

          <div className='d-flex flex-grow-1 justify-content-around align-items-center rounded-2 h-50' style={{ backgroundColor: 'white', }}>

            <i className='bi bi-search px-2' style={{ color: '#94A3B8' }}></i>
            <input className='border-0 px-3 flex-grow-1' type='text' id="searchContent" style={searchInput} value={serchvalue} onKeyDown={enter} onChange={serachHandler} placeholder="Search" />
            <i className='' onClick={toggleSearchHandler} style={{ marginRight: '1em', boxShadow: 'none' }}><img src='Icon (Stroke).png'></img></i>
          </div>




        </div>
      </div>

      {/*container when open*/}
      <nav className={`navbar navbar-expand-lg px-4`} style={navbar_header}>

        <div className="container-fluid">

          <i className="bi bi-list px-1" role="button" onClick={handleMouseEnter} style={{ ...baseTextColor, fontSize: '20px' }}></i>


          <Link className="navbar-brand text-white" to="/"><img src='Logo-v3 1.png'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ ...baseTextColor }}>Flash deals</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ ...baseTextColor }}>
                  Karachi
                </a>
                <ul className="dropdown-menu" style={{ ...baseTextColor }}>
                  <li><a className="dropdown-item cities" href="#">Lahore</a></li>
                  <li><a className="dropdown-item cities" href="#">Islamabad</a></li>
                  <li><a className="dropdown-item cities" href="#">Multan</a></li>
                </ul>
              </li>

            </ul>
            <div className='d-flex' style={navbar_rightarea}>
              <span className='' style={right_icons}>
                <span onClick={toggleSearchHandler}>

                  <i className='bi-search text-white' ></i>
                </span>

                <i className="bi bi-whatsapp text-success"></i>
                <span style={{ position: 'relative' }}>
                  {productcount >= 1 ? <span class="badge badge-pill badge-primary" style={{ position: 'absolute', top: -5, left: '10px' }}>{productcount}</span> : ""}
                  <Link to="/addtocart"><i className="bi bi-cart text-white"></i></Link>
                </span>

              </span>
              <span style={right_button}>
                {
                  localStorage.getItem('username') ? <Accounts name={localStorage.getItem('username')} /> : <Loginbutton />
                }


              </span>


            </div>

          </div>
        </div>
      </nav>
      <div className='submenu' onClick={handleMouseLeave} style={submenu}>

        <div class="card" >
          <h3>Categories</h3>
          {card(1)}
        </div>
        {
          cards.map((e) => {
            return <Card onClick={() => {
              dispatch(GetallCards(e.child));
            }} card={e.child} />
          })
        }



      </div>
      <marquee style={{
        backgroundColor: 'gold', fontWeight: '600', background: 'linear-gradient(90deg, rgba(249, 160, 26, 1) 0%, rgba(255,215,0,1) 5%, rgba(255,215,0,1) 95%, rgba(249, 160, 26, 1) 100%)'
      }}>Scroll Karo Shop Karo - Download the app now </marquee>


    </>
  )
}
