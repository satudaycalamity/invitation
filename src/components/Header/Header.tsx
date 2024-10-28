import React from 'react';

interface Props {
  title?: string
  sections?: string
}

const Header: React.FC<Props> = (props) => {
  const {
    title = 'Invitación',
    sections = ''
  } = props;

    return (
        <div>
          <h3>{title}</h3>
          <nav>
            <ul>
              {/* <li></li> */}
            </ul>
          </nav>
        </div>
    );
}

export default Header;
