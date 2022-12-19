import React from 'react'

const Navigation = () => {
  return (
    <>
        <div className='navigation'>
                    <p>AR SHAKIR</p>
                    <nav>
                        <select style={{marginRight:"13px"}}>
                            <option >Product</option>
                        </select>
                        <select style={{marginLeft:"13px",marginRight:"15px"}}>
                            <option >Template</option>
                        </select>
                        
                        <a href='@' style={{marginLeft:"15px",marginRight:"20px",fontWeight:"500"}}>Blog</a>
                        <a href='@' style={{marginLeft:"20px"}}>Pricing</a>
                    </nav>
                    <div className='enroll'>
                        <a href='@' style={{width:"44px",paddingLeft:0,paddingRight:"49px"}}>Sign In </a>
                        <a href='@' style={{width:"137px",color:"white", padding:"16px 36px",backgroundColor:"#4F46BA"}}>Start Free</a>
                    </div>
                           
            </div>
    </>
  )
}

export default Navigation;
