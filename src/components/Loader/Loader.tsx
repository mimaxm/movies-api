import { FC } from "react";
import Loader from "react-loader-spinner";

export const DataLoader: FC = () => {
   return(
      <div className="loader">
         <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
   )
}