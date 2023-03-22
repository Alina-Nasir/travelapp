
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import BackgroundSlider from './Components/backgroundslider';
import CardComponent from './Components/cardComponent';
import Footer from './Components/footer';
import Figures from './Components/figures';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <BackgroundSlider></BackgroundSlider>
      <h3 style={{margin:'2rem',fontFamily:'sans-serif',fontWeight:'bold'}}>TRAVEL DESTINATIONS IN PAKISTAN</h3>
      <div style={{display:'flex',justifyContent:'center'}}>
      <CardComponent title="Journey through Indus Valley" 
      text="Travel from Karachi deep into the Punjab taking in Sufi tombs, the ruins of Mohenjo-daro, the fortress of Derawar, Multan and the vibrant city of Lahore."
      image="https://www.wildfrontierstravel.com/media/cache/driver/upload/mirror/dhruv-wildfrontierstravel-com/9c512ba2_06SouthernPakistan.webp"></CardComponent>
      <CardComponent title="Summer Mountain Explorer" 
      text="Travel from Islamabad through the Kaghan Valley and to the Deosai Plateau, Fairy Meadows, the Hunza Valley and meet the Kalash people"
      image="https://www.wildfrontierstravel.com/media/cache/driver/upload/mirror/dhruv-wildfrontierstravel-com/8a4c0cb1_PakistanSummerExplorer12.webp"></CardComponent>
      <CardComponent title="Classic Baltistan" 
      text="Enjoy the spectacular mountain scenery of Baltistan, a less-visited part of northern Pakistan and home to some of our favourite properties and towns"
      image="https://www.wildfrontierstravel.com/media/cache/driver/upload/mirror/dhruv-wildfrontierstravel-com/5cef09a7_HunzaValleyDT.webp"></CardComponent>
      
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <CardComponent title="Classic North-West Frontier" 
      text="The Northwest Frontier is the birthplace of Wild Frontiers and what a fabulous place at that!This tour gets you right up to the remote Chitral and the wonderful pagan Kalash tribe for a truly unforgettable trip."
      image="https://www.wildfrontierstravel.com/media/cache/driver/upload/mirror/dhruv-wildfrontierstravel-com/8317f803_MountainRoadtoChitraldreamstimexxl65440533.webp"></CardComponent>
      <CardComponent title="Walking in Pakistan: Journey to roof of world" 
      text="Delve deep into the majestic Karakoram Mountains of Northern Pakistan with this epic walking trip through some of the world's wildest and most beautiful landscapes"
      image="https://www.wildfrontierstravel.com/media/cache/driver/upload/mirror/dhruv-wildfrontierstravel-com/7762ea56_dreamstimem201196766.webp"></CardComponent>
      <CardComponent title="Undiscovered Southern Punjab" 
      text="Journey from the streets of Karachi right up through the Indus Valley to the cultural hub of Lahore. This city focused tour is truly travelling off the beaten track as you'll struggle to find another tourist until you reach Lahore."
      image="https://www.wildfrontierstravel.com/media/cache/driver/upload/mirror/dhruv-wildfrontierstravel-com/9d74e1c7_dreamstimem31284251.webp"></CardComponent>
      
      </div>
      <br></br>
      
    <Footer></Footer> 
    
    </div>
  );
}

export default App;
