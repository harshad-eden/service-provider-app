import React from 'react';
import Main from '../../components/Layout';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Steps from './Step';
import { BsChevronDown } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';

const Index = () => {
  return (
    <Main>
      <Link to={'/pre-auths'}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <HiOutlineArrowLeft size={30} />
          <h3 style={{ marginBottom: 0, fontWeight: 700 }}>Claims</h3>
        </div>
      </Link>
      <div style={{ width: '90%', margin: 'auto' }}>
        <div style={{ marginBottom: 60 }}>
          <p style={{ marginBottom: 5, color: '#3eb919', fontWeight: 700 }}>claim</p>
          <div
            style={{
              width: '100%',
              display: 'flex',
              backgroundColor: 'white',
              borderRadius: 15,
              padding: 30,
              alignItems: 'center',
            }}
          >
            <img
              style={{ width: 70, height: 70, borderRadius: '50%', marginRight: 40 }}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
              alt=""
            />
            {/* <div
            style={{ width: 70, height: 70, borderRadius: '50%', backgroundColor: '#4287f5' }}
          ></div> */}
            <div style={{ marginRight: 70 }}>
              <p style={{ fontWeight: 700, color: '#3eb919' }} className="mbZero">
                Patient
              </p>
              <p style={{ fontWeight: 700, fontSize: 22 }} className="mbZero">
                Kipagat George
              </p>
              <p className="mbZero">#000000000</p>
            </div>

            <div>
              <p style={{ fontWeight: 700 }} className="mbZero">
                Insurance Type
              </p>
              <p style={{ fontWeight: 800, fontSize: 18, color: '#3eb919' }}>Bronze</p>
            </div>
          </div>
        </div>
        <div style={{ width: '100%', marginTop: 30 }}>
          <div
            style={{
              width: '95%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h2>Received</h2>
            <h2>Processing</h2>
            <p style={{ marginRight: 15 }}>Status</p>
            <p style={{ marginRight: 25 }}>Payment Processing</p>
            <p>Paid</p>
          </div>
          <Steps />
          <div
            style={{
              width: '95%',
              display: 'flex',
              alignItems: 'center',
              // justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <div style={{ width: '24.5%' }}>
              <BsChevronDown style={{ color: '#3eb919' }} size={30} />
              <div>
                <h3 style={{ fontSize: 13, paddingTop: 5, fontWeight: 700 }}>12th Jan 2022</h3>
                <div style={{ width: '70%', height: 0.5, backgroundColor: 'black' }}></div>
                <div />
              </div>
              <div>
                <div style={{ paddingTop: 15, paddingBottom: 15 }}>
                  <p className="mbZero" style={{ fontSize: 13 }}>
                    ID NO.00000
                  </p>
                  <h3 className="mbZero" style={{ fontWeight: 'bold' }}>
                    John Dawati
                  </h3>
                </div>
                <div style={{ width: '70%', height: 0.5, backgroundColor: 'black' }}></div>
                <div />
              </div>
              <div>
                <div style={{ display: 'flex', paddingTop: 15, paddingBottom: 15 }}>
                  <div style={{ display: 'flex', alignItems: 'center', width: 80 }}>
                    <HiOutlineDocumentText size={30} color="#f87d4e" />
                    <p className="mbZero" style={{ fontSize: 8 }}>
                      Request form
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', width: 80 }}>
                    <HiOutlineDocumentText size={30} color="#f87d4e" />
                    <p className="mbZero" style={{ fontSize: 8 }}>
                      Request form
                    </p>
                  </div>
                </div>
                <div />
              </div>
            </div>
            <div style={{ width: '20%' }}>
              <BsChevronDown style={{ color: '#3eb919' }} size={30} />
              <div>
                <h3 style={{ fontSize: 13, paddingTop: 5, fontWeight: 700 }}>12th Jan 2022</h3>
                <div style={{ width: '70%', height: 0.5, backgroundColor: 'black' }}></div>
                <div />
              </div>
              <div>
                <div style={{ paddingTop: 15, paddingBottom: 15 }}>
                  <p className="mbZero" style={{ fontSize: 13 }}>
                    ID NO.00000
                  </p>
                  <h3 className="mbZero" style={{ fontWeight: 'bold' }}>
                    John Dawati
                  </h3>
                </div>
                <div style={{ width: '70%', height: 0.5, backgroundColor: 'black' }}></div>
                <div />
              </div>
              <div>
                <div style={{ display: 'flex', paddingTop: 15, paddingBottom: 15 }}>
                  <p style={{ fontSize: 13 }} className="mbZero">
                    The rates are too high, <br /> is there way ?
                  </p>
                </div>

                <div />
              </div>
            </div>
            <div>
              <BsChevronDown
                style={{ color: '#3eb919', marginRight: 8, display: 'none' }}
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;
