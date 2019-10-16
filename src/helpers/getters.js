const getUrl = data => {
  let url;
  if (data.country) {
    url = `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&country=${
      data.country
    }`;
  } else if (data.category) {
    url = `/top-headlines?page=${data.page}&pageSize=${
      data.pageSize
    }&category=${data.category}`;
  } else if (data.language) {
    url = `/top-headlines?page=${data.page}&pageSize=${
      data.pageSize
    }&language=${data.language}`;
  } else if (data.source) {
    url = `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&sources=${
      data.source
    }`;
  } else {
    url = `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&country=${
      data.country
    }&category=${data.category}&language=${data.language}`;
  }
  return url;
};

export default { getUrl };
