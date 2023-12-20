import "./Info.scss";

export default function Info(forms) {
  return (
    <>
      {forms.forms.map((item) => {
        return (
          <div className="form_card" id={item.id} key={item.id}>
            <h1>Номер {item.id}</h1>
            <h2>{item.title}</h2>
            <h3>{item.body}</h3>
          </div>
        );
      })}
    </>
  );
}
