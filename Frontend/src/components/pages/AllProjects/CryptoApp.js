import { Row, Card } from 'antd';

import React from 'react';
// import '../../styles/Shop.less';
// import '../../styles/Shop.css';
// import Modal from '../../common/Modal';

// const DemoBox = props => (
//   <p className={`height-${props.value}`}>{props.children}</p>
// );

const { Meta } = Card;
// const onMenuClick = e => {
//   console.log('click', e);
// };
const CryptoApp = () => (
  <>
    {/* <Modal /> */}
    <div className="shop-container">
      <Row justify="center" align="top">
        {/* <Col span={4}> */}
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={require('../../../assets/crypto-wallet.png')}
            />
          }
        >
          <Meta title="Crypto App" description="" />
        </Card>
        {/* <DemoBox value={280}> */}
        {/* <a style={{}}>more info</a> */}
        {/* </DemoBox> */}
        {/* <p>Description</p> */}
        {/* </Col> */}
      </Row>
    </div>
  </>
);

export default CryptoApp;
