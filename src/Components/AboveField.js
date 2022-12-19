import React from 'react';
import Navigation from './Navigation';

const AboveField = () => {
  return (
    <>
        <div className='above-field'>
            <Navigation/>
            
                <main>
                    <section className='left-section'>
                        <div className='big-text'>
                            <p>Managing freelance payments has never been easier</p>
                        </div>

                        <div className='small-text'>
                            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.</p>
                        </div>
                        
                        <div className='button-tabs'>
                            
                                <a href='@' style={{backgroundColor:"#3734A9",color:"white",borderRadius:"47px",marginRight:"50px"}}>Get Started</a>
                                <div style={{float:"right"}}>
                                    <img src='svg/playbutton.svg' alt='' value=''/>
                                    <a href='@' style={{color:"#3734A9",position:"absolute"}}>  See How It Works</a>
                                </div>
                        </div>

                        <div className='low-left'>
                            <div style={{float:"left",marginRight:"12px"}}>
                                <span> <img src='svg/circletick.svg' alt='' value=''/></span>
                                <a href='@'>Free Service</a>
                            </div>

                            <div style={{float:"right",marginLeft:"12px"}}>
                                <span> <img src='svg/circletick.svg' alt='' value=''/></span>
                                <a href='@'>Great Service</a>
                            </div>
                        </div>

                    </section>
                        <div className='left-cross-pattern'>
                            <img src='svg/leftdots.svg' alt='' value=''/>
                        </div>

                    <section className='right-section'>
                        <img src='svg/hands.svg' alt='' value=''/>
                    </section>
                        <div className='right-cross-pattern'>
                            <img src='svg/rightdots.svg' alt='' value=''/>
                        </div>
                </main>

                <div className='slant-object'>
                    <img src='svg/slantobject.svg' alt='' value=''/>

                </div>

                <div className='companies'>
                    <div className='section-related-ompanies'>
                        <p>Over 32k+ software businesses growing with AR Shakir.</p>
                        <div className='logos'>
                            <img src='svg/openzepp.svg' alt='' value=''/>
                            <img src='svg/oracle.svg' alt='' value=''/>
                            <img src='svg/morpheus.svg' alt='' value=''/>
                            <img src='svg/samsung.svg' alt='' value=''/>
                            <img src='svg/monday.svg' alt='' value=''/>
                            <img src='svg/segment.svg' alt='' value=''/>
                            <img src='svg/protonet.svg' alt='' value=''/>

                        </div>
                    </div>
                </div>       
        </div>

    </>
  )
}

export default AboveField;
