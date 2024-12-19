import * as Icons from '@sopt-makers/icons';

export const Default = {
  argTypes: {
    color: { control: 'color' },
  },
  render: (props: { color: string }) => {
    const style = { width: 24, height: 24, color: props.color };

    return (
      <div className='icons-wrap'>
        <div className='icons-group'>
          <h4>Communication</h4>
          <div>
            <Icons.IconArchive style={style} />
            <p>archive</p>
          </div>
          <div>
            <Icons.IconBirthdayPrimary style={style} />
            <p>birthday-primary</p>
          </div>
          <div>
            <Icons.IconBirthdaySecondary style={style} />
            <p>birthday-secondary</p>
          </div>
          <div>
            <Icons.IconBookMark style={style} />
            <p>bookmark</p>
          </div>
          <div>
            <Icons.IconEdit style={style} />
            <p>edit</p>
          </div>
          <div>
            <Icons.IconEyeOff style={style} />
            <p>eye-off</p>
          </div>
          <div>
            <Icons.IconEye style={style} />
            <p>eye</p>
          </div>
          <div>
            <Icons.IconMail style={style} />
            <p>mail</p>
          </div>
          <div>
            <Icons.IconMento style={style} />
            <p>mento</p>
          </div>
          <div>
            <Icons.IconMessageAlert style={style} />
            <p>message-alert</p>
          </div>
          <div>
            <Icons.IconMessageChat style={style} />
            <p>message-chat</p>
          </div>
          <div>
            <Icons.IconMessageCheck style={style} />
            <p>message-check</p>
          </div>
          <div>
            <Icons.IconMessageDots style={style} />
            <p>message-dots</p>
          </div>
          <div>
            <Icons.IconMessagePlus style={style} />
            <p>message-plus</p>
          </div>
          <div>
            <Icons.IconMessageQuestion style={style} />
            <p>message-question</p>
          </div>
          <div>
            <Icons.IconMessageSquare style={style} />
            <p>message-square</p>
          </div>
          <div>
            <Icons.IconMessageText style={style} />
            <p>message-text</p>
          </div>
          <div>
            <Icons.IconMessageX style={style} />
            <p>message-x</p>
          </div>
          <div>
            <Icons.IconPhone style={style} />
            <p>phone</p>{' '}
          </div>
          <div>
            <Icons.IconPin style={style} />
            <p>pin</p>
          </div>
          <div>
            <Icons.IconSend style={style} />
            <p>send</p>
          </div>
          <div>
            <Icons.IconLocation style={style} />
            <p>location</p>
          </div>
          <div>
            <Icons.IconLocationFilled style={style} />
            <p>location-filled</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>Editor</h4>
          <div>
            <Icons.IconAlignCenter style={style} />
            <p>align-center</p>
          </div>
          <div>
            <Icons.IconAlignJustify style={style} />
            <p>align-justify</p>
          </div>
          <div>
            <Icons.IconAlignLeft style={style} />
            <p>align-left</p>
          </div>
          <div>
            <Icons.IconAlignRight style={style} />
            <p>align-right</p>
          </div>
          <div>
            <Icons.IconAttachment style={style} />
            <p>attachment</p>
          </div>
          <div>
            <Icons.IconBold style={style} />
            <p>bold</p>
          </div>
          <div>
            <Icons.IconCode style={style} />
            <p>code</p>
          </div>
          <div>
            <Icons.IconDelete style={style} />
            <p>delete</p>
          </div>
          <div>
            <Icons.IconDotpoints style={style} />
            <p>dotpoints</p>
          </div>
          <div>
            <Icons.IconItalic style={style} />
            <p>italic</p>
          </div>
          <div>
            <Icons.IconLeftIndent style={style} />
            <p>left-indent</p>
          </div>
          <div>
            <Icons.IconLetterSpacing style={style} />
            <p>letter-spacing</p>
          </div>
          <div>
            <Icons.IconLineHeight style={style} />
            <p>line-height</p>
          </div>
          <div>
            <Icons.IconParagraphSpacing style={style} />
            <p>paragraph-spacing</p>
          </div>
          <div>
            <Icons.IconParagraphWrap style={style} />
            <p>paragraph-wrap</p>
          </div>
          <div>
            <Icons.IconRightIndent style={style} />
            <p>right-indent</p>
          </div>
          <div>
            <Icons.IconTypeStrikethrough style={style} />
            <p>type-strikethrough</p>
          </div>
          <div>
            <Icons.IconType style={style} />
            <p>type</p>
          </div>
          <div>
            <Icons.IconUnderline style={style} />
            <p>underline</p>
          </div>
          <div>
            <Icons.IconWrite style={style} />
            <p>write</p>
          </div>
          <div>
            <Icons.IconZoomIn style={style} />
            <p>zoom-in</p>
          </div>
          <div>
            <Icons.IconZoomOut style={style} />
            <p>zoom-out</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>Feedback</h4>
          <div>
            <Icons.IconAlertCircle style={style} />
            <p>alert-circle</p>
          </div>
          <div>
            <Icons.IconAlertTriangle style={style} />
            <p>alert-triangle</p>
          </div>
          <div>
            <Icons.IconBellActive style={style} />
            <p>bell-active</p>
          </div>
          <div>
            <Icons.IconBellOff style={style} />
            <p>bell-off</p>
          </div>
          <div>
            <Icons.IconBell style={style} />
            <p>bell</p>
          </div>
          <div>
            <Icons.IconHelpCircle style={style} />
            <p>help-circle</p>
          </div>
          <div>
            <Icons.IconInfoCircle style={style} />
            <p>info-circle</p>
          </div>
          <div>
            <Icons.IconThumbsDown style={style} />
            <p>thumbs-down</p>
          </div>
          <div>
            <Icons.IconThumbsUp style={style} />
            <p>thumbs-up</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>Files</h4>
          <div>
            <Icons.IconFileCheck style={style} />
            <p>file-check</p>
          </div>
          <div>
            <Icons.IconFileDownload style={style} />
            <p>file-download</p>
          </div>
          <div>
            <Icons.IconFileMinus style={style} />
            <p>file-minus</p>
          </div>
          <div>
            <Icons.IconFilePlus style={style} />
            <p>file-plus</p>
          </div>
          <div>
            <Icons.IconFileSearch style={style} />
            <p>file-search</p>
          </div>
          <div>
            <Icons.IconFileText style={style} />
            <p>file-text</p>
          </div>
          <div>
            <Icons.IconFileX style={style} />
            <p>file-x</p>
          </div>
          <div>
            <Icons.IconFile style={style} />
            <p>file</p>
          </div>
          <div>
            <Icons.IconFolderCheck style={style} />
            <p>folder-check</p>
          </div>
          <div>
            <Icons.IconFolderDownload style={style} />
            <p>folder-download</p>
          </div>
          <div>
            <Icons.IconFolder style={style} />
            <p>folder</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>General</h4>
          <div>
            <Icons.IconCopy style={style} />
            <p>icon-copy</p>
          </div>
          <div>
            <Icons.IconDotsVertical style={style} />
            <p>dots-vertical</p>
          </div>
          <div>
            <Icons.IconDownloadCloud style={style} />
            <p>download-cloud</p>
          </div>
          <div>
            <Icons.IconHome style={style} />
            <p>home</p>
          </div>
          <div>
            <Icons.IconLink style={style} />
            <p>link</p>
          </div>
          <div>
            <Icons.IconLock style={style} />
            <p>lock</p>
          </div>
          <div>
            <Icons.IconLogIn style={style} />
            <p>log-in</p>
          </div>
          <div>
            <Icons.IconLogOut style={style} />
            <p>log-out</p>
          </div>
          <div>
            <Icons.IconMenu style={style} />
            <p>menu</p>
          </div>
          <div>
            <Icons.IconSearch style={style} />
            <p>search</p>
          </div>
          <div>
            <Icons.IconSettings style={style} />
            <p>settings</p>
          </div>
          <div>
            <Icons.IconShare style={style} />
            <p>share</p>
          </div>
          <div>
            <Icons.IconSliders style={style} />
            <p>sliders</p>
          </div>
          <div>
            <Icons.IconTrash style={style} />
            <p>trash</p>
          </div>
          <div>
            <Icons.IconUnlocked style={style} />
            <p>unlocked</p>
          </div>
          <div>
            <Icons.IconUploadCloud style={style} />
            <p>upload-cloud</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>Interaction</h4>
          <div>
            <Icons.IconArrowDownLeft style={style} />
            <p>arrow-down-left</p>
          </div>
          <div>
            <Icons.IconArrowDownRight style={style} />
            <p>arrow-down-right</p>
          </div>
          <div>
            <Icons.IconArrowDown style={style} />
            <p>arrow-down</p>
          </div>
          <div>
            <Icons.IconArrowLeft style={style} />
            <p>arrow-left</p>
          </div>
          <div>
            <Icons.IconArrowRight style={style} />
            <p>arrow-right</p>
          </div>
          <div>
            <Icons.IconArrowUpLeft style={style} />
            <p>arrow-up-left</p>
          </div>
          <div>
            <Icons.IconArrowUpRight style={style} />
            <p>arrow-up-right</p>
          </div>
          <div>
            <Icons.IconArrowUp style={style} />
            <p>arrow-up</p>
          </div>
          <div>
            <Icons.IconCheckCircle style={style} />
            <p>check-circle</p>
          </div>
          <div>
            <Icons.IconCheckSquare style={style} />
            <p>check-square</p>
          </div>
          <div>
            <Icons.IconCheck style={style} />
            <p>check</p>
          </div>
          <div>
            <Icons.IconChevronDown style={style} />
            <p>chevron-down</p>
          </div>
          <div>
            <Icons.IconChevronLeft style={style} />
            <p>chevron-left</p>
          </div>
          <div>
            <Icons.IconChevronRight style={style} />
            <p>chevron-right</p>
          </div>
          <div>
            <Icons.IconChevronUp style={style} />
            <p>chevron-up</p>
          </div>
          <div>
            <Icons.IconFlipBackward style={style} />
            <p>flip-backward</p>
          </div>
          <div>
            <Icons.IconFlipForward style={style} />
            <p>flip-forward</p>
          </div>
          <div>
            <Icons.IconHeart style={style} />
            <p>heart</p>
          </div>
          <div>
            <Icons.IconPlusCircle style={style} />
            <p>plus-circle</p>
          </div>
          <div>
            <Icons.IconPlusSquare style={style} />
            <p>plus-square</p>
          </div>
          <div>
            <Icons.IconPlus style={style} />
            <p>plus</p>
          </div>
          <div>
            <Icons.IconRefresh style={style} />
            <p>refresh</p>
          </div>
          <div>
            <Icons.IconSwitchHorizontal style={style} />
            <p>switch-horizontal</p>
          </div>
          <div>
            <Icons.IconSwitchVertical style={style} />
            <p>switch-vertical</p>
          </div>
          <div>
            <Icons.IconXCircle style={style} />
            <p>x-circle</p>
          </div>
          <div>
            <Icons.IconXClose style={style} />
            <p>x-close</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>Media</h4>
          <div>
            <Icons.IconCameraOff style={style} />
            <p>camera-off</p>
          </div>
          <div>
            <Icons.IconCameraPlus style={style} />
            <p>camera-plus</p>
          </div>
          <div>
            <Icons.IconCamera style={style} />
            <p>camera</p>
          </div>
          <div>
            <Icons.IconImageCheck style={style} />
            <p>image-check</p>
          </div>
          <div>
            <Icons.IconImageDown style={style} />
            <p>image-down</p>
          </div>
          <div>
            <Icons.IconImageLeft style={style} />
            <p>image-left</p>
          </div>
          <div>
            <Icons.IconImagePlus style={style} />
            <p>image-plus</p>
          </div>
          <div>
            <Icons.IconImageRight style={style} />
            <p>image-right</p>
          </div>
          <div>
            <Icons.IconImageUp style={style} />
            <p>image-up</p>
          </div>
          <div>
            <Icons.IconImage style={style} />
            <p>image</p>
          </div>
          <div>
            <Icons.IconPower style={style} />
            <p>power</p>
          </div>
          <div>
            <Icons.IconRepeat style={style} />
            <p>repeat</p>
          </div>
          <div>
            <Icons.IconVideoOff style={style} />
            <p>video-off</p>
          </div>
          <div>
            <Icons.IconVideo style={style} />
            <p>video</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>Time</h4>
          <div>
            <Icons.IconAlarmClockCheck style={style} />
            <p>alarm-clock-check</p>
          </div>
          <div>
            <Icons.IconAlarmClockMinus style={style} />
            <p>alarm-clock-minus</p>
          </div>
          <div>
            <Icons.IconAlarmClockOff style={style} />
            <p>alarm-clock-off</p>
          </div>
          <div>
            <Icons.IconAlarmClockPlus style={style} />
            <p>alarm-clock-plus</p>
          </div>
          <div>
            <Icons.IconAlarmClock style={style} />
            <p>alarm-clock</p>
          </div>
          <div>
            <Icons.IconCalendarCheck style={style} />
            <p>calendar-check</p>
          </div>
          <div>
            <Icons.IconCalendarDate style={style} />
            <p>calendar-date</p>
          </div>
          <div>
            <Icons.IconCalendarPlus style={style} />
            <p>calendar-plus</p>
          </div>
          <div>
            <Icons.IconCalendar style={style} />
            <p>calendar</p>
          </div>
          <div>
            <Icons.IconClockCheck style={style} />
            <p>clock-check</p>
          </div>
          <div>
            <Icons.IconClockPlus style={style} />
            <p>clock-plus</p>
          </div>
          <div>
            <Icons.IconClockSnooze style={style} />
            <p>clock-snooze</p>
          </div>
          <div>
            <Icons.IconClock style={style} />
            <p>clock</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>Users</h4>
          <div>
            <Icons.IconUserCheck style={style} />
            <p>user-check</p>
          </div>
          <div>
            <Icons.IconUserEdit style={style} />
            <p>user-edit</p>
          </div>
          <div>
            <Icons.IconUserMinus style={style} />
            <p>user-minus</p>
          </div>
          <div>
            <Icons.IconUserPlus style={style} />
            <p>user-plus</p>
          </div>
          <div>
            <Icons.IconUserX style={style} />
            <p>user-x</p>
          </div>
          <div>
            <Icons.IconUser style={style} />
            <p>user</p>
          </div>
          <div>
            <Icons.IconUsersCheck style={style} />
            <p>users-check</p>
          </div>
          <div>
            <Icons.IconUsersMinus style={style} />
            <p>users-minus</p>
          </div>
          <div>
            <Icons.IconUsersPlus style={style} />
            <p>users-plus</p>
          </div>
          <div>
            <Icons.IconUsersX style={style} />
            <p>users-x</p>
          </div>
          <div>
            <Icons.IconUsers style={style} />
            <p>users</p>
          </div>
        </div>

        <div className='icons-group'>
          <h4>Logo</h4>
          <div>
            <Icons.IconApple style={style} />
            <p>apple</p>
          </div>
          <div>
            <Icons.IconBehance style={style} />
            <p>behance</p>
          </div>
          <div>
            <Icons.IconFacebook style={style} />
            <p>facebook</p>
          </div>
          <div>
            <Icons.IconGithub style={style} />
            <p>github</p>
          </div>
          <div>
            <Icons.IconGoogleColor style={style} />
            <p>google-color</p>
          </div>
          <div>
            <Icons.IconGoogleMono style={style} />
            <p>google-mono</p>
          </div>
          <div>
            <Icons.IconInstagram style={style} />
            <p>instagram</p>
          </div>
          <div>
            <Icons.IconKakao style={style} />
            <p>kakao</p>
          </div>
          <div>
            <Icons.IconLinkedin style={style} />
            <p>linkedin</p>
          </div>
          <div>
            <Icons.IconPlaystore style={style} />
            <p>playstore</p>
          </div>
        </div>
      </div>
    );
  },
};

export default {
  title: 'icons/Icons',
  component: Default,
};
