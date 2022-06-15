import classes from "./about.module.css";
import { AnimatePresence, motion } from "framer-motion";

const About = (props) => {
  return (
    <AnimatePresence >
      
      <motion.div
        className={classes.about}
        initial={{ x: window.innerWidth}}
        animate={{ x: 0 }}
        exit={{x:window.innerWidth,transition:{duration:0.1}}}
      >
        <p>
        This project will help the user to upload there documents and store the extracted texts in
the database linked with the images that user can search from through our software .User
can copy text through our software and use it anywhere they desire.We will convert out
extracted text to .txt file and connect it to the particular image using linked list. We will
extract the text using Image Text Recognition engine. OCR systems can recognize not
only printed text, but also hand-written text, text formatting style, tables, diagrams, and
images. Therefore, Text capture is a process to convert analogue text based resources into
digitally recognisable text resources. These digital text resources can be represented in
many ways such as searchable text in indexes to identify documents or page images, or
as full text resources. An essential first stage in any text capture process from analogue
to digital will be to create a scanned image of the page side. This will provide the base
for all other processes. The next stage may then be to use a technology known as Optical
Character Recognition to convert the text content into a machine readable format.
Image Text Recognition is a type of document image analysis where a scanned digital
image that contains either machine printed or handwritten script is input into an OCR software engine and translating it into an editable machine readable digital text format (like
ASCII text). Image Text Recognition works by first pre-processing the digital page image
into its smallest component parts with layout analysis to find text blocks, sentence/line
blocks, word blocks and character blocks. Other features such as lines, graphics, photographs etc are recognised and discarded. The character blocks are then further broken
1
down into components parts, pattern recognized and compared to the OCR engines large
dictionary of characters from various fonts and languages. Once a likely match is made
then this is recorded and a set of characters in the word block are recognized until all
likely characters have been found for the word block. The word is then compared to the
OCR engine’s large dictionary of complete words that exist for that language.
A typical OCR task can be divided into the following sub-tasks: • Acquiring Images:
In this step we convert the images in required digital formats with the help of the user
uploading them to the website. • Pre-processing Images: Once we have the images in the
desired format, we have to pre-process the images to assist the system in recognizing the
text present in the images. Front-end will be created using react. React (also known as
React.js or ReactJS) is a free and open-source front-end JavaScript library for building
user interfaces based on UI components. It is maintained by Meta (formerly Facebook).
For Searching, we will sort and binary search through our data and present the user with a
particular image that contains that text. Nodejs will be used to create server-side connecting with our Front-end .Node.js is an open-source, cross-platform, back-end JavaScript
runtime environment that runs on the V8 engine and executes JavaScript code outside a
web browser. Node.js lets developers use JavaScript to write command line tools and for
server-side scripting—running scripts server-side to produce dynamic web page content
before the page is sent to the user’s web browser.
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
