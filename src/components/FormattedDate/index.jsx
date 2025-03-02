const FormattedDate = ({ isHighLight ,children}) => {
  return (
    <div>
      <span className={`text-sm ${isHighLight ?"text-primaryTitle":""}`}>
        {children}
      </span>
    </div>
  )
}

export default FormattedDate;