const getUrl = data => {
  let url;
  if (data.country) {
    url = `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&country=${data.country}`;
  } else if (data.category) {
    url = `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&category=${data.category}`;
  } else if (data.language) {
    url = `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&language=${data.language}`;
  } else if (data.source) {
    url = `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&sources=${data.source}`;
  } else if (data.searchString) {
    url = `/everything?page=${data.page}&pageSize=${data.pageSize}&q=${data.searchString}`;
  } else {
    url = `/top-headlines?page=${data.page}&pageSize=${data.pageSize}&country=${data.country}&category=${data.category}&language=${data.language}`;
  }
  return url;
};

const getPage = (offset, pageSize) => {
  return offset >= pageSize ? Math.ceil(offset / pageSize) + 1 : 1;
};

export default { getUrl, getPage };
