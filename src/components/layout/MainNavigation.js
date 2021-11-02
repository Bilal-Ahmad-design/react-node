import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to='/'>React Practice</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All meetups</Link>
          </li>
          <li>
            <Link to='/favourites'>Favourite Items</Link>
          </li>
          <li>
            <Link to='/new-meetup'>New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

//

export default MainNavigation;
