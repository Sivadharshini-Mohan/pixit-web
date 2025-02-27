interface ActionProps{
    primaryBtn: string;
    secondaryBtn:string;
    onClose:any;
}
const Actions =(props:ActionProps)=>{
    const {primaryBtn,secondaryBtn,onClose}=props;
    return <div className="actions">
    <button type="button" className="secondaryBtn btn" onClick={onClose}>{secondaryBtn}</button>
    <button type="submit" className="primaryBtn btn">{primaryBtn}</button>
    <style jsx>
        {`
         .actions{
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        gap: 10px;
        height: 10%
      }
        `}
    </style>
  </div>
}
export default Actions