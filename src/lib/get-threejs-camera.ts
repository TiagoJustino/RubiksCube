const getThreeJsCamera = (cam: any) => {
  for (const [_, value] of cam?.$$?.context?.entries()) {
    if (value?.type == "PerspectiveCamera") {
      return value;
    }
  }
  return null;
};

export { getThreeJsCamera };
