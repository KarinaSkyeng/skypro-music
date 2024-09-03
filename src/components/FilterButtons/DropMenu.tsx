import React, { useState } from 'react';
import styles from './Dropmenu.module.css';

type DropMenuProps = { 
  list: string[]; 
  trackCount: number; 
};

export const DropMenu: React.FC<DropMenuProps> = ({ list, trackCount }) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prevState => !prevState);

  return (
    <div className={styles.dropMenuContainer}>
      <button onClick={toggleMenu} className={styles.dropMenuButton}>
        {isOpen ? 'Скрыть меню' : `Показать меню (${trackCount})`}
      </button>
      {isOpen && (
        <div className={styles.dropMenu}>
          <div className={styles.dropMenuList}>
            {list.map(item => (
              <div key={item}>
                <a className={styles.dropMenuText} href='http://'>
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
