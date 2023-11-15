// @ts-nocheck
export const FindImgInMarks = (markUpText, index) => {
  let dataContentSrcWithAttribute = markUpText.match(/data-content-src=\S+"/gm);
  if (dataContentSrcWithAttribute) {
    dataContentSrcWithAttribute =
      dataContentSrcWithAttribute[0].match(/https.*"/gm);
    return dataContentSrcWithAttribute[0];
  }
  if (!dataContentSrcWithAttribute) {
    let dataContentSrcWithAttribute = markUpText.match(/data-image=".+?"/gm);
    if (dataContentSrcWithAttribute) {
      dataContentSrcWithAttribute =
        dataContentSrcWithAttribute[0].match(/".+/gm);
      return dataContentSrcWithAttribute[0];
    }
    if (!dataContentSrcWithAttribute) {
      dataContentSrcWithAttribute = markUpText.match(
        /data-image=.".+default/gm
      );
      if (dataContentSrcWithAttribute) {
        dataContentSrcWithAttribute =
          dataContentSrcWithAttribute[0].match(/".+/gm);
        return dataContentSrcWithAttribute[0];
      }

      if (!dataContentSrcWithAttribute) {
        dataContentSrcWithAttribute = markUpText.match(
          /img\ssrc=."https\S+\\/gm
        );
        if (dataContentSrcWithAttribute) {
          dataContentSrcWithAttribute =
            dataContentSrcWithAttribute[0].match(/htt.*/gm);
          return dataContentSrcWithAttribute[0];
        }
        if (!dataContentSrcWithAttribute) {
          dataContentSrcWithAttribute =
            markUpText.match(/img\ssrc="http\S+"/gm);
          if (dataContentSrcWithAttribute) {
            dataContentSrcWithAttribute =
              dataContentSrcWithAttribute[0].match(/https.*"/gm);
            return dataContentSrcWithAttribute[0];
          }
          if (!dataContentSrcWithAttribute) {
            dataContentSrcWithAttribute =
              "https://img.freepik.com/premium-vector/documents-confirmed-or-approved-document_149152-439.jpg";
            return dataContentSrcWithAttribute;
          }
        }
      }
    } else {
      dataContentSrcWithAttribute =
        dataContentSrcWithAttribute[0].match(/".+/gm);
      return dataContentSrcWithAttribute;
    }
  }
};
