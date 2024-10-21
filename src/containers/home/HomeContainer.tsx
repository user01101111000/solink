import { isObject, useFormik } from "formik";
import { motion } from "framer-motion";
import { LinkField, IAllInputValues } from "../../interfaces/components/Input";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/lib/store";
import useUpdateData from "../../hooks/api/useUpdateData";
import { generatorSchema } from "../../utils/yup/schema";
import { MdLogout } from "react-icons/md";
import useAuth from "../../hooks/context/useAuth";
import { useNavigate } from "react-router-dom";
import LoadingImageComponent from "../../components/ui/Loading/Loading";
const HomeContainer = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { mutateAsync } = useUpdateData();
  const userInfo = useSelector((state: RootState) => state.userInfo);

  const generatedLinks = userInfo?.links?.map((link: any) => ({
    label: link?.mapValue?.fields?.label?.stringValue,
    url: link?.mapValue?.fields?.url?.stringValue,
  }));

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
  } = useFormik<IAllInputValues>({
    initialValues: {
      avatar: userInfo.avatar,
      location: userInfo.location,
      about: userInfo.about,
      fullName: userInfo.fullName,
      links: generatedLinks,
    },
    onSubmit,
    validationSchema: generatorSchema,
  });

  const addLink = () => {
    const newLinks = [...values.links, { label: "", url: "" }];
    setFieldValue("links", newLinks);
  };

  const removeLink = (index: number) => {
    if (index) {
      const newLinks = [...values.links];
      newLinks.splice(index, 1);
      setFieldValue("links", newLinks);
    }
  };

  const handleLinkChange = (
    index: number,
    field: LinkField.LABEL | LinkField.URL,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newLinks = [...values.links];
    newLinks[index][field] = event.target.value;
    setFieldValue("links", newLinks);
  };

  async function onSubmit(values: IAllInputValues) {
    await mutateAsync({
      values,
      otherData: {
        id: userInfo.id,
        email: userInfo.email,
        username: userInfo.username,
      },
    });
  }
  return (
    <form onSubmit={handleSubmit} className="home_wrapper">
      <section className="home">
        <div className="generator_header">
          <h1>@ {userInfo.username}</h1>
          <MdLogout
            className="generator_header__icon"
            onClick={() => {
              logout();
              navigate("/");
            }}
          />
        </div>

        <div className="row row1">
          {isObject(values.avatar) ? (
            <figure className="row1__figure">
              <img src={URL.createObjectURL(values.avatar)} alt="avatar" />
            </figure>
          ) : (
            <figure className="row1__figure">
              <img src={values.avatar} alt="avatar" />
            </figure>
          )}

          <label htmlFor="avatar" className="custom_file_picker">
            Select image
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            name="avatar"
            id="avatar"
            onChange={(e) => setFieldValue("avatar", e.target.files![0])}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="row row2"
        >
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Rollo Tomassi"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
          />

          {errors.fullName && touched.fullName && (
            <p className="error_message_generator">{errors.fullName}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="row row3"
        >
          <label htmlFor="location">Location</label>
          <input
            id="location"
            name="location"
            type="text"
            placeholder="London, United Kingdom"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.location}
          />

          {errors.location && touched.location && (
            <p className="error_message_generator">{errors.location}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="row row4"
        >
          <label htmlFor="about">About</label>
          <input
            id="about"
            name="about"
            type="text"
            placeholder="Front-end developer and reader"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.about}
          />

          {errors.about && touched.about && (
            <p className="error_message_generator">{errors.about}</p>
          )}
        </motion.div>

        {values.links.map((link, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1, type: "spring" }}
            className="link_input_box"
            key={index}
          >
            <div className="link_input_box__line">
              <label htmlFor={`links[${index}].label`}>Link {index + 1}</label>
              {Boolean(index) && <h1 onClick={() => removeLink(index)}>x</h1>}
            </div>
            <input
              type="text"
              name={`links[${index}].label`}
              value={link.label}
              onChange={(e) => handleLinkChange(index, LinkField.LABEL, e)} // Label değişikliği
              placeholder="Label"
              className="label_input"
            />
            {errors.links && touched.links && (
              <p className="error_message_generator">
                {errors?.links?.[index]?.["label"]}
              </p>
            )}

            <input
              type="text"
              name={`links[${index}].url`}
              value={link.url}
              onChange={(e) => handleLinkChange(index, LinkField.URL, e)} // URL değişikliği
              placeholder="URL"
              className="url_input"
            />

            {errors.links && touched.links && (
              <p className="error_message_generator">
                {errors?.links?.[index]?.["url"]}
              </p>
            )}
          </motion.div>
        ))}
        <button type="button" onClick={addLink}>
          Add More Link
        </button>
      </section>

      <div className="home_wrapper__buttons">
        <button
          type="submit"
          className={`generate_button${isSubmitting ? " generating" : ""}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? <LoadingImageComponent size="1rem" /> : "Generate"}
        </button>

        {userInfo.fullName && (
          <button
            type="button"
            className="preview_button"
            onClick={() =>
              navigate(`/home/${userInfo.id}/${userInfo.username}`)
            }
          >
            Preview
          </button>
        )}
      </div>
    </form>
  );
};

export default HomeContainer;
