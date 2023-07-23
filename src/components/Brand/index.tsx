interface Props {
  variant?: 'default' | 'black' | 'white'
}

const Brand = ({variant = 'default'}: Props) => {
  const color = variant === 'default' ? 'purple-700' : variant
  return (
    <span className={`font-bold text-3xl text-${color}`}>Nu</span>
  )
}

export default Brand
