import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    // 'http://seng2021-f12a-api-env.eba-pymctycp.ap-southeast-2.elasticbeanstalk.com/',
    'http://localhost:3000/'
});

// Returns an object of structure `{ token: string; violations: string[] }`
export const invoiceCreate = async (data) => {
  const axiosResponse = await axiosInstance.post(
    'frontend/invoice/create',
    data
  );

  return axiosResponse.data;
};

export const invoiceRender = async (token) => {
  console.log(token);
  const axiosResponse = await axiosInstance.get('frontend/invoice/render', {
    params: { token },
  });

  return axiosResponse.data;
};

export const invoiceDownload = async (token) => {
  console.log(token);
  try {
    const axiosResponse = await axiosInstance.get('frontend/invoice/download', {
      params: { token },
    });

    return axiosResponse.data;
  } catch (error) {
    console.log(error);
  }
};

export const invoiceUpload = async (invoiceString, type) => {
  const axiosResponse = await axiosInstance.post('frontend/invoice/upload', {
    invoice: invoiceString,
    type: type
  });
  return axiosResponse.data;
};
