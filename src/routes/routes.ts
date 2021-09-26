interface Routes {
   home: string,
   movies: string,
   movieDetails: string,
   about: string
}

export const routes: Routes = {
   home: '/',
   movies: '/movies',
   movieDetails: '/movies/:movieId',
   about: '/about',
};