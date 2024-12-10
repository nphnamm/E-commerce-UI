import React from 'react';

import Sofa from './Sofa/index';
import TVCabinet from './TVCabinet/index';
import Dining from './Dining/index';
import Wordrobe from './Wordrobe/index';
import Bed from './Wordrobe/index';
import Door from './Door/index';
import Divan from './Divan/index';
import DressingTable from './DressingTable/index';
import Kitchen from './Kitchen/index';
import Lamp from './Lamp/index';
import ReadingTable from './ReadingTable/index';
import Office from './Office/index';
import Mattress from './Mattress/index';
import ChestDrawer from './ChestDrawers/index';
import Windows from './Windows/index';
import Miscellaneous from './Miscellaneous/index';



// Tạo một object để lưu các icon
const Icons = {
  Sofa,
  TVCabinet,
  Dining,
  Wordrobe,
  Bed,
  DressingTable,
  Door, 
  Divan,
  Kitchen,
  Lamp,
  Office,
  ReadingTable,
  Mattress,
  ChestDrawer,
  Windows,
  Miscellaneous
  

  // Thêm các icon khác
};

const IconComponent = ({ name, ...props }) => {
  // Lấy icon theo tên
  const Icon = Icons[name];

  // Nếu không tìm thấy icon, hiển thị một thông báo hoặc icon mặc định
  if (!Icon) {
      return null // Hoặc trả về null nếu không muốn hiển thị gì
  }

  // Render icon
  return <Icon {...props} />;
};

export default IconComponent;