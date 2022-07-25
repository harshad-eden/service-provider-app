import React from 'react';
import Main from '../../template';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Steps from './Step';
import { BsChevronDown } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi';
import TelImg from '../../img/tel.png';
import EmailImg from '../../img/email.png';
import BronzeImg from '../../img/bronze.png';
import dental from '../../img/dentist.png';
import general from '../../img/general.png';
import maternity from '../../img/maternity.png';
import optical from '../../img/optical.png';
import { useSelector } from 'react-redux';
import Loader from '../Common/Loader';

let items = [
  { title: 'General', img: general },
  { title: 'Maternity', img: maternity },
  { title: 'Dentist', img: dental },
  { title: 'Optical', img: optical },
];

const Index = () => {
  const { content } = useSelector((state) => state.preAuth);
  const { id } = useParams();

  let state = content?.find((item) => item.id === id);

  return (
    <Main>
      <Link to={'/pre-auths'}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 40 }}>
          <HiOutlineArrowLeft size={30} />
          <h3 style={{ marginBottom: 0, fontWeight: 700 }}>Pre-auths</h3>
        </div>
      </Link>

      {state ? (
        <div style={{ width: '90%', margin: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            {/* one */}
            <div
              style={{
                backgroundColor: '#cffad6',
                height: 170,
                width: '30%',
                borderRadius: 20,
                padding: 20,
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', right: 1, top: -35 }}>
                <img
                  style={{ width: 70, height: 70, borderRadius: '50%', marginRight: 40 }}
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
                  alt=""
                />
              </div>
              <div style={{ marginTop: 15 }}>
                <p style={{ fontWeight: 700, color: '#3eb919' }} className="mbZero">
                  Patient
                </p>
                <p style={{ fontWeight: 700, fontSize: 18 }} className="mbZero">
                  {state.member?.name}
                </p>
                <p className="mbZero">#000000000</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <img src={TelImg} style={{ height: 20 }} alt="" />
                  <span style={{ fontSize: 12 }}>{state.member_card_number}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                  <img src={EmailImg} style={{ height: 20 }} alt="" />
                  <span style={{ fontSize: 12 }}>{state.member.email}</span>
                </div>
              </div>
            </div>
            {/* two */}
            <div
              style={{
                backgroundColor: 'white',
                height: 170,
                width: '30%',
                borderRadius: 20,
                padding: 20,
                position: 'relative',
              }}
            >
              <div style={{ position: 'absolute', right: 1, top: -35 }}>
                <img
                  style={{ width: 70, height: 70, borderRadius: '50%', marginRight: 40 }}
                  src={BronzeImg}
                  alt=""
                />
              </div>
              <div style={{ marginTop: 15 }}>
                <p style={{ fontWeight: 700 }} className="mbZero">
                  Insurance Type
                </p>
                <p style={{ fontWeight: 600, color: '#f4bb1d' }} className="mbZero">
                  {state.member?.insurance_type}
                </p>
              </div>

              <div style={{ display: 'flex', gap: 22, marginTop: 20 }}>
                {items.map((item) => (
                  <div style={{ display: 'grid', placeItems: 'center' }} key={item.title}>
                    <img src={item.img} style={{ height: 30 }} alt="" />
                    <span style={{ fontSize: 10 }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'white',
                height: 170,
                width: '30%',
                borderRadius: 20,
                padding: 20,
                position: 'relative',
              }}
            ></div>
          </div>

          <div style={{ width: '100%', marginTop: 50 }}>
            <div
              style={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <h2>Received</h2>
              <h2>Processing</h2>
              <h2>Status</h2>
            </div>
            <Steps />
            <div
              style={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
              }}
            >
              <div style={{ flex: 1 }}>
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
                    <div style={{ display: 'flex', alignItems: 'center', width: 80 }}>
                      <HiOutlineDocumentText size={30} color="#f87d4e" />
                      <div className="mbZero" style={{ fontSize: 8 }}>
                        Request form
                      </div>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
              <div style={{ flex: 1, marginRight: 47 }}>
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
                      The rates are too high, is there way ?
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
      ) : (
        <Loader />
      )}
    </Main>
  );
};

export default Index;
