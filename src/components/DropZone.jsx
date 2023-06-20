import { Group, Text, useMantineTheme, rem } from '@mantine/core';
import { IconUpload, IconFile, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, PDF_MIME_TYPE } from '@mantine/dropzone';
import { useState } from 'react';
import {LoadingOverlay} from '@mantine/core';
export default function DropZone(props) {
  const [file, setFile] = useState();

  const theme = useMantineTheme();

  const handleFileChange = (files) => {
    setFile(files[0].name);
    props.fileupload(files[0]);
    console.log(files[0])

  }
  return (
    <Dropzone
      onDrop={ (files) =>  handleFileChange(files) }
      onReject={(files) => alert('rejected files', files)}
      maxSize={15 * 1024 ** 2}
      accept={PDF_MIME_TYPE}
      {...props}
    >                                    <LoadingOverlay visible={props.overlay} overlayBlur={2}/>

      <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <IconUpload
            size="3.2rem"
            stroke={1.5}
            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <IconX
            size="3.2rem"
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <IconFile size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

          {file == null && 
            <div>
            <Text size="xl" inline>
              Drag a pdf file here or click to select a file
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach one pdf file, the file should not exceed 10mb
            </Text>
          </div>
          }
          
          {file != null && 
            <div>
            <Text size="xl" inline>
              file is ready to be uploaded
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              {file}
            </Text>
          </div>
          }


      </Group>
    </Dropzone>
  );
}