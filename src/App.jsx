
import './App.css'
import Banner from './components/banner/Banner'
import Actions from './components/blogs/Actions'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

function App() {
  

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Banner></Banner>
     
        <div className="main-container  bg-gray-200  ">
        <div className=' px-6 pt-6 ' >
          <h1 className='font-semibold text-2xl text-blue-500'>Active Auctions</h1>
          <p>Discover and bid on extraordinary items</p>
          
          </div>
          <div className=' flex'>
          <div className="left-container w-[80%] p-5"> 
          <Actions>

          </Actions>
         
        </div>
        <div className="right-container w-[20%]">Blogss</div>
          </div>
        
       
        </div>
       


        <Footer></Footer>

      </div>
      
    </>
  )
}

export default App
