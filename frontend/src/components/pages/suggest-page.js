import construction from "../../images/construction.jpg"
import Navbar from "../basic/navbar";
import Letters from "../basic/logo-letters";

const Suggest = () => {
  return ( 
    <div className="suggest-container">
    <Letters />
      <Navbar />
    <div className="suggest-content">
    <img src={construction} alt="construction" className="contruction phone-picture"/>
    </div>
    </div> 
   );
}
 
export default Suggest;