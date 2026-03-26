export const uploadFileService = async (file) => {
  return {
    url: file.location,
    key: file.key,
  };
};
