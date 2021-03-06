import React from 'react';
import { router } from 'dva';
import Exception from '@/components/Exception';

const { Link } = router;

const NotFoundError = () => (
  <Exception type="404" style={{ minHeight: 500, height: '80%' }} linkElement={Link} />
);

export default NotFoundError;
