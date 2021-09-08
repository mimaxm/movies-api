import { FC } from 'react';
import './EmptyList.scss';

export const EmptyList: FC = () => {
   return (
      <div className="empty-list">
         <p className="empty-list__quote">“CINEMA IS A MIRROR BY WHICH WE OFTEN SEE OURSELVES.”</p>
         <p>© Alejandro Gonzalez Inarritu</p>
      </div>
   )
}