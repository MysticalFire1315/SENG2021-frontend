const InvoiceRendered = (rawHtml) => {
  return (
    <div style={container}>
      <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>
    </div>
  );
};
