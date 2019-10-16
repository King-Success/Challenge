const getUrl = data => {
  return `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&country=${
    data.country
  }&category=${data.category}&language=${data.language}`;
};

export default { getUrl };
