import Brand from '../Brand'

const Copyright = () => (
  <footer className='bg-[#131313] text-white'>
    <div className='container m-auto py-24'>
      <Brand variant='white'/>
      <div className='mt-8 text-lg'>
        <p>&copy; {new Date().getFullYear()} Nudemo</p>
        <p>Rua dos bobos, N° 0 - Ali Perto, SC - 00000-000</p>
      </div>
    </div>
  </footer>
)

export default Copyright
