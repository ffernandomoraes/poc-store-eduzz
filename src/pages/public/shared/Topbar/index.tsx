import { AiOutlineApi } from 'react-icons/ai';

import AvatarOutlineIcon from '@eduzz/houston-icons/AvatarOutline';
import Topbar from '@eduzz/houston-ui/Layout/Topbar';

export default () => (
  <Topbar>
    <Topbar.Action icon={<AiOutlineApi />} />
    <Topbar.Action icon={<AvatarOutlineIcon />} />
  </Topbar>
);
