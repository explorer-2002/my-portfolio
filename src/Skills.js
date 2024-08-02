import ProgressBar from '@ramonak/react-progress-bar'

export default function Skills() {
  return (
    <div>
      <div className='py-5'>
        <h1 className='py-2'>Languages</h1>

        <p className='mt-3'>html</p>
        <ProgressBar completed={80} bgColor="#f7dc6f" animateOnRender={true}/>

        <p className='mt-3'>css</p>
        <ProgressBar completed={65} bgColor="#85c1e9" animateOnRender={true}/>

        <p className='mt-3'>javascript</p>
        <ProgressBar completed={80} bgColor="#85929e" animateOnRender={true}/>

        <p className='mt-3'>java</p>
        <ProgressBar completed={70} bgColor="#edbb99" animateOnRender={true}/>

        <p className='mt-3'>c++</p>
        <ProgressBar completed={60} bgColor="#48c9b0" animateOnRender={true}/>
      </div>

      <div className='py-5'>
        <h1 className='py-2'>Frameworks</h1>

        <p className='mt-3'>React</p>
        <ProgressBar completed={80} bgColor="#f1948a" animateOnRender={true}/>

        <p className='mt-3'>Expess.js</p>
        <ProgressBar completed={68} bgColor="#b7950b" animateOnRender={true}/>

        <p className='mt-3'>Bootstrap</p>
        <ProgressBar completed={70} bgColor="#82e0aa" animateOnRender={true}/>

        <p className='mt-3'>Tailwind css</p>
        <ProgressBar completed={77} bgColor="#85c1e9" animateOnRender={true}/>
      </div>

      <div className='py-5'>
        <h1 className='py-2'>Databases</h1>

        <p className='mt-3'>Sql</p>
        <ProgressBar completed={70} bgColor="#a9cce3" animateOnRender={true}/>

        <p className='mt-3'>MongoDb</p>
        <ProgressBar completed={60} bgColor="#f8c471" animateOnRender={true}/>

      </div>
    </div>
  )
}
